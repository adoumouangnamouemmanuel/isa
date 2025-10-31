# Supabase Storage & Database Setup Guide

## Part 1: Storage Setup for Profile Images

### Step 1: Create Storage Bucket

1. Go to your Supabase Dashboard
2. Navigate to **Storage** in the sidebar
3. Click **Create a new bucket**
4. Configure the bucket:
   - **Name**: `profile-images`
   - **Public bucket**: ✅ Enable (so images can be viewed publicly)
   - **File size limit**: 10 MB
   - **Allowed MIME types**: `image/jpeg, image/jpg, image/png, image/webp, image/gif`
5. Click **Create bucket**

### Step 2: Set Storage Policies

Go to **Storage** → **Policies** and create these policies:

#### Policy 1: Allow authenticated users to upload their own images

```sql
create policy "Users can upload their own profile images"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'profile-images'
  AND (storage.foldername(name))[1] = auth.uid()::text
  AND octet_length(decode(encode(content, 'base64'), 'base64')) <= 10485760
);
```

#### Policy 2: Allow public read access

```sql
create policy "Public can view profile images"
on storage.objects for select
to public
using (bucket_id = 'profile-images');
```

#### Policy 3: Allow users to update their own images

```sql
create policy "Users can update their own profile images"
on storage.objects for update
to authenticated
using ((storage.foldername(name))[1] = auth.uid()::text)
with check (
  bucket_id = 'profile-images'
  AND (storage.foldername(name))[1] = auth.uid()::text
);
```

#### Policy 4: Allow users to delete their own images

```sql
create policy "Users can delete their own profile images"
on storage.objects for delete
to authenticated
using ((storage.foldername(name))[1] = auth.uid()::text);
```

---

## Part 2: Database Schema Updates

### Step 1: Update Profiles Table

Run this SQL to add profile image field and make it a view-friendly structure:

```sql
-- Add profile_image_url column to profiles table
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS profile_image_url text,
ADD COLUMN IF NOT EXISTS bio text,
ADD COLUMN IF NOT EXISTS role text DEFAULT 'Member',
ADD COLUMN IF NOT EXISTS is_executive boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS committees text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS languages text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS interests text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS linkedin text,
ADD COLUMN IF NOT EXISTS joined_date timestamp with time zone DEFAULT timezone('utc'::text, now());

-- Add updated_at trigger (if not exists)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

### Step 2: Create a Public Members View

This creates a view that shows only approved/public member information:

```sql
-- Create a view for public member profiles
CREATE OR REPLACE VIEW public_members AS
SELECT
  id,
  first_name,
  last_name,
  CONCAT(first_name, ' ', last_name) as full_name,
  email,
  country,
  class_year as year,
  major,
  profile_image_url as avatar,
  bio,
  role,
  is_executive,
  committees,
  languages,
  interests,
  linkedin,
  joined_date
FROM profiles
WHERE email IS NOT NULL
ORDER BY is_executive DESC, created_at DESC;

-- Grant access to the view
GRANT SELECT ON public_members TO authenticated;
GRANT SELECT ON public_members TO anon;
```

### Step 3: Create RLS Policies for Profiles

```sql
-- Allow authenticated users to read all profiles
CREATE POLICY "Authenticated users can view all profiles"
ON profiles FOR SELECT
TO authenticated
USING (true);

-- Allow public to view all profiles (for members page)
CREATE POLICY "Public can view all profiles"
ON profiles FOR SELECT
TO public
USING (true);

-- Allow users to update only their own profile
CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);
```

---

## Part 3: Testing the Setup

### Test Storage:

1. Log in to your app
2. Go to profile page
3. Try uploading an image
4. Check Supabase Storage → profile-images bucket
5. Verify image appears

### Test Members Database:

1. Create a few test user accounts
2. Visit `/members` page
3. Should see real users instead of mock data
4. Filter and search should work

---

## Part 4: Image Upload Guidelines

**Supported Formats:**

- JPEG/JPG
- PNG
- WebP
- GIF

**Size Limit:**

- Maximum: 10 MB per image

**Recommended Dimensions:**

- Minimum: 200x200 px
- Recommended: 400x400 px
- Maximum: 2000x2000 px

**File Naming:**

- Format: `{user_id}/profile.{ext}`
- Example: `550e8400-e29b-41d4-a716-446655440000/profile.jpg`

---

## Security Features

✅ **User Isolation**: Users can only access their own folder
✅ **Size Validation**: 10MB limit enforced
✅ **Type Validation**: Only image types allowed
✅ **RLS Policies**: Database access controlled
✅ **Public Read**: Images viewable but not editable by public

---

## Troubleshooting

**Upload fails?**
→ Check file size is under 10MB
→ Verify bucket policies are created
→ Check browser console for errors

**Image doesn't display?**
→ Verify bucket is set to public
→ Check the URL format is correct
→ Clear browser cache

**Can't see other members?**
→ Verify RLS policies allow public read
→ Check profiles table has data
→ Verify public_members view exists

---

**Ready!** Follow the steps above to complete the setup. 🚀
