# Supabase Authentication Setup for ISA Website

## Prerequisites

1. A Supabase account ([signup at supabase.com](https://supabase.com))
2. Node.js and Bun installed

## Step 1: Create Supabase Project

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Fill in:
   - **Project Name**: ISA Website
   - **Database Password**: (create a strong password and save it)
   - **Region**: Choose closest to your users
4. Wait for project to be created (~2 minutes)

## Step 2: Get Your Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

## Step 3: Configure Environment Variables

1. Open the `.env.local` file in the `web` folder
2. Replace the placeholder values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 4: Create Database Tables

Run this SQL in your Supabase SQL Editor (**Dashboard** → **SQL Editor** → **New Query**):

```sql
-- Create profiles table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  first_name text not null,
  last_name text not null,
  phone text,
  country text,
  class_year text,
  major text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );

-- Create a function to handle updated_at
create or replace function handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create trigger for updated_at
create trigger set_updated_at
  before update on profiles
  for each row
  execute procedure handle_updated_at();
```

## Step 5: Configure Email Templates (Optional but Recommended)

1. Go to **Authentication** → **Email Templates**
2. Customize the "Confirm signup" email template
3. Update the confirmation URL to: `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=signup`

## Step 6: Test the Setup

1. Start your development server:

   ```bash
   bun run dev
   ```

2. Navigate to `/join` and create a test account
3. Check your email for confirmation link
4. Click the confirmation link
5. Try logging in at `/login`

## Features Implemented

✅ **Sign Up** - Users can register with:

- Email and password
- First name, last name
- Phone number
- Country
- Class year
- Major/Program

✅ **Sign In** - Users can login with email and password

✅ **Email Verification** - Users receive confirmation emails

✅ **Session Management** - Automatic session refresh with middleware

✅ **Secure Authentication** - Row Level Security (RLS) enabled

## File Structure

```
web/
├── .env.local                          # Environment variables
├── src/
│   ├── app/
│   │   └── actions/
│   │       └── auth.ts                 # Server actions for auth
│   ├── components/
│   │   └── join/
│   │       ├── minimalist-join-form.tsx   # Signup form
│   │       └── minimalist-login-form.tsx  # Login form
│   ├── lib/
│   │   └── supabase/
│   │       ├── client.ts               # Client-side Supabase client
│   │       ├── server.ts               # Server-side Supabase client
│   │       └── middleware.ts           # Session management
│   └── middleware.ts                   # Next.js middleware
```

## Next Steps

### Add User Profile Page

Create a profile page where users can:

- View their information
- Update their details
- Upload profile picture

### Add Password Reset

Implement "Forgot Password" functionality

### Add OAuth Providers

Add Google/GitHub/Microsoft authentication

### Protected Routes

Create middleware to protect pages that require authentication

## Troubleshooting

### "Invalid API key" error

- Check that your `.env.local` values are correct
- Make sure you're using the **anon public** key, not the service role key
- Restart your dev server after changing env variables

### Email not sending

- Check your Supabase email provider settings
- For development, check the Supabase Dashboard → Authentication → Users
- The confirmation token is visible in the dashboard

### "Profile creation error"

- Make sure you ran the SQL commands to create the profiles table
- Check the Supabase Dashboard → Table Editor to verify the table exists

## Security Notes

⚠️ **Never commit `.env.local` to version control**
⚠️ **Use Row Level Security (RLS) policies for all tables**
⚠️ **Validate user input on both client and server**
⚠️ **Use the service role key only in secure server environments**

## Support

For issues with Supabase: [Supabase Documentation](https://supabase.com/docs)
For Next.js questions: [Next.js Documentation](https://nextjs.org/docs)
