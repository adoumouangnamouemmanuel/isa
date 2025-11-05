"use client";

import { deleteAccount } from "@/app/actions/auth";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Loader2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function DeleteAccountDialog() {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleFirstConfirm = () => {
    if (!password) {
      toast.error("Please enter your password");
      return;
    }
    setOpen(false);
    setConfirmOpen(true);
  };

  const handleFinalDelete = async () => {
    if (confirmText.toUpperCase() !== "DELETE") {
      toast.error('Please type "DELETE" to confirm');
      return;
    }

    setIsDeleting(true);

    try {
      const result = await deleteAccount(password);

      if (result.error) {
        toast.error(result.error);
        setIsDeleting(false);
        return;
      }

      toast.success("Account deleted successfully");
      setConfirmOpen(false);

      // Redirect to home page after a brief delay
      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1000);
    } catch{
      toast.error("An unexpected error occurred");
      setIsDeleting(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setConfirmOpen(false);
    setPassword("");
    setConfirmText("");
    setIsDeleting(false);
  };

  return (
    <>
      {/* First Dialog - Password Verification */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/30"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Account
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-destructive/10">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <AlertDialogTitle className="text-xl">
                Delete Account?
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription className="space-y-3 text-left">
              <p className="font-semibold text-foreground">
                This action cannot be undone. This will permanently:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Delete your profile and all personal information</li>
                <li>Remove your profile image from our servers</li>
                <li>Revoke your access to ISA membership benefits</li>
                <li>Remove you from all committees and activities</li>
              </ul>
              <p className="text-sm font-medium text-destructive pt-2">
                Please enter your password to continue:
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-4">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleFirstConfirm();
                }
              }}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={handleFirstConfirm}
              disabled={!password}
            >
              Continue
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Second Dialog - Final Confirmation */}
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-destructive/10">
                <AlertTriangle className="h-6 w-6 text-destructive animate-pulse" />
              </div>
              <AlertDialogTitle className="text-xl">
                Final Confirmation
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription className="space-y-3 text-left">
              <p className="font-bold text-destructive text-base">
                Are you absolutely sure?
              </p>
              <p className="text-sm">
                This is your last chance to cancel. Once confirmed, your account
                will be permanently deleted and cannot be recovered.
              </p>
              <p className="text-sm font-medium pt-2">
                Type <span className="font-bold text-foreground">DELETE</span>{" "}
                to confirm:
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-4">
            <Input
              type="text"
              placeholder='Type "DELETE" to confirm'
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="font-mono"
              disabled={isDeleting}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isDeleting) {
                  handleFinalDelete();
                }
              }}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel} disabled={isDeleting}>
              Cancel
            </AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={handleFinalDelete}
              disabled={confirmText.toUpperCase() !== "DELETE" || isDeleting}
            >
              {isDeleting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Permanently
                </>
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
