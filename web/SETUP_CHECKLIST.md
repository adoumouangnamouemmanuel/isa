# 🚀 Supabase Authentication - Quick Start Checklist

## ✅ Step-by-Step Setup (5 minutes)

### 1️⃣ Create Supabase Project (2 min)

- [ ] Go to https://supabase.com/dashboard
- [ ] Click "New Project"
- [ ] Name: "ISA Website"
- [ ] Create strong database password (save it!)
- [ ] Choose region closest to your users
- [ ] Wait for setup to complete

### 2️⃣ Get Your Credentials (1 min)

- [ ] Go to **Settings** → **API** in your Supabase dashboard
- [ ] Copy **Project URL** (e.g., `https://xxxxx.supabase.co`)
- [ ] Copy **anon public** key (starts with `eyJ...`)

### 3️⃣ Update Environment Variables (30 sec)

- [ ] Open `web/.env.local`
- [ ] Replace `your_supabase_project_url` with your Project URL
- [ ] Replace `your_supabase_anon_key` with your anon key
- [ ] Save the file

### 4️⃣ Create Database Table (1 min)

- [ ] In Supabase dashboard, go to **SQL Editor**
- [ ] Click **New Query**
- [ ] Copy and paste this SQL:

```sql
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

alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone"
  on profiles for select using ( true );

create policy "Users can insert their own profile"
  on profiles for insert with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update using ( auth.uid() = id );
```

- [ ] Click **Run** (bottom right)
- [ ] Verify "Success. No rows returned" message

### 5️⃣ Test It Out! (30 sec)

- [ ] Run: `bun run dev`
- [ ] Open browser: http://localhost:3000/join
- [ ] Fill out the form with test data
- [ ] Submit and check your email
- [ ] Click confirmation link
- [ ] Try logging in at http://localhost:3000/login

## 🎉 That's it! You're done!

## 🔍 Quick Verification

After setup, verify these work:

- [ ] Can create new account at `/join`
- [ ] Receive confirmation email
- [ ] Can confirm email via link
- [ ] Can login at `/login`
- [ ] See user in Supabase Dashboard → Authentication → Users

## ⚠️ Common Issues

### "Invalid API key"

→ **Fix:** Double-check your `.env.local` values
→ **Fix:** Restart dev server: `Ctrl+C` then `bun run dev`

### "Table doesn't exist"

→ **Fix:** Run the SQL query again in Supabase SQL Editor
→ **Fix:** Check **Table Editor** tab to confirm `profiles` table exists

### Email not arriving

→ **Check:** Spam/Junk folder
→ **Check:** Supabase Dashboard → Authentication → Users (user should be listed)
→ **Check:** For development, confirmation isn't strictly required

### Form shows loading forever

→ **Fix:** Open browser console (F12) and check for errors
→ **Fix:** Verify environment variables are correct
→ **Fix:** Check Supabase Dashboard → Logs for errors

## 📚 Documentation

- **Detailed Guide:** See `SUPABASE_SETUP.md`
- **Implementation Details:** See `AUTH_IMPLEMENTATION.md`

## 🆘 Need Help?

1. Check the error in browser console (F12)
2. Check Supabase logs: Dashboard → Logs
3. Verify your setup against this checklist
4. See documentation files for more details

---

**All set?** Start coding! 🚀
