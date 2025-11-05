# Account Deletion Setup

## Overview

The account deletion feature allows users to permanently delete their accounts with double confirmation.

## User Flow

1. User clicks "Delete Account" button in Settings
2. First Dialog: User enters password to verify identity
3. Second Dialog: User types "DELETE" to confirm permanent deletion
4. Account is deleted:
   - Profile image removed from storage
   - Profile record deleted from database
   - User metadata marked as deleted
   - User is signed out and redirected to home

## Database Setup (Optional - For Complete Deletion)

If you want to enable complete user deletion from Supabase Auth (not just marking as deleted), you need to create an Edge Function or enable the following:

### Option 1: Enable Self-Service Account Deletion (Recommended)

In your Supabase Dashboard:

1. Go to Authentication > Settings
2. Enable "Enable account deletion" under Self-service
3. This allows users to delete their own accounts

### Option 2: Create a Database Function (Advanced)

Run this SQL in your Supabase SQL Editor if you want a custom deletion function:

```sql
-- Create a function to delete a user account
-- This requires service role access
CREATE OR REPLACE FUNCTION delete_own_account()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_id uuid;
BEGIN
  -- Get the current user ID
  user_id := auth.uid();

  IF user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Delete profile record
  DELETE FROM profiles WHERE id = user_id;

  -- Delete from auth.users (requires service role)
  DELETE FROM auth.users WHERE id = user_id;
END;
$$;
```

### Option 3: Use RPC Call (If function created)

If you create the function above, update the `deleteAccount` function in `auth.ts` to use:

```typescript
const { error: deleteError } = await supabase.rpc("delete_own_account");
```

## Current Implementation

The current implementation:

1. ✅ Verifies user password
2. ✅ Deletes profile images from storage
3. ✅ Deletes profile record from database
4. ✅ Marks user metadata as deleted
5. ✅ Signs user out
6. ⚠️ Auth record remains (requires manual admin deletion or Edge Function)

## Security Features

- ✅ Password verification before deletion
- ✅ Double confirmation (password + typing "DELETE")
- ✅ Clear warnings about data loss
- ✅ List of what will be deleted
- ✅ Cannot be undone message
- ✅ Loading states during deletion
- ✅ Error handling with user feedback

## Files Modified

1. `src/app/actions/auth.ts` - Added `deleteAccount` server action
2. `src/components/settings/delete-account-dialog.tsx` - Created deletion dialog component
3. `src/app/settings/page.tsx` - Updated to use deletion dialog

## Testing Checklist

- [ ] Test with incorrect password - should fail
- [ ] Test cancellation at first dialog - should cancel
- [ ] Test cancellation at second dialog - should cancel
- [ ] Test typing wrong confirmation text - should not allow deletion
- [ ] Test successful deletion - should delete and redirect
- [ ] Verify profile images are deleted
- [ ] Verify profile record is deleted
- [ ] Verify user is signed out
