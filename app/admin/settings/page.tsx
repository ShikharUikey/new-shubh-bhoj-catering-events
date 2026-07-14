"use client";

import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [usernamePassword, setUsernamePassword] = useState("");
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  useEffect(() => {
    fetchUsername();
  }, []);

  const fetchUsername = async () => {
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      if (res.ok && data.success) {
        setUsername(data.username);
        setNewUsername(data.username);
      }
    } catch (err) {
      console.error("Failed to fetch username", err);
    }
  };

  const handleUpdateUsername = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUsername || !usernamePassword) {
      alert("Please fill in all fields for username update.");
      return;
    }

    try {
      setUsernameLoading(true);
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "username",
          newUsername,
          password: usernamePassword,
        }),
      });
      const data = await res.json();
      
      if (!res.ok || !data.success) {
        alert(data.message || "Failed to update username.");
        return;
      }

      alert("Username updated successfully.");
      setUsername(newUsername);
      setUsernamePassword("");
    } catch (err) {
      console.error(err);
      alert("An error occurred while updating username.");
    } finally {
      setUsernameLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all fields for password update.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      setPasswordLoading(true);
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "password",
          currentPassword,
          newPassword,
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Failed to update password.");
        return;
      }

      alert("Password updated successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error(err);
      alert("An error occurred while updating password.");
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-[#5A001A] mb-2">
          Settings
        </h1>
        <p className="text-gray-500">
          Manage basic system and account information.
        </p>
      </div>

      {/* Business Info Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 border">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          Business Information
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block font-medium text-sm text-gray-600 mb-2">
              Business Name
            </label>
            <input
              type="text"
              value="Shubh Bhoj Catering & Events"
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-50 text-gray-700"
            />
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-600 mb-2">
              Contact Number
            </label>
            <input
              type="text"
              value="+91 62631 26954"
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-50 text-gray-700"
            />
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-600 mb-2">
              Email
            </label>
            <input
              type="text"
              value="info@shubhbhoj.com"
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-50 text-gray-700"
            />
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-600 mb-2">
              System Version
            </label>
            <input
              type="text"
              value="v1.0"
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-50 text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Account Settings Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Username Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              Admin Login Username
            </h2>
            <form onSubmit={handleUpdateUsername} className="space-y-4">
              <div>
                <label className="block font-medium text-sm text-gray-600 mb-2">
                  Current Username
                </label>
                <input
                  type="text"
                  value={username}
                  disabled
                  className="w-full border rounded-lg p-3 bg-gray-50 text-gray-500"
                />
              </div>

              <div>
                <label className="block font-medium text-sm text-gray-600 mb-2">
                  New Username / Email
                </label>
                <input
                  type="email"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="new-email@example.com"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5A001A]/20 focus:border-[#5A001A]"
                  required
                />
              </div>

              <div>
                <label className="block font-medium text-sm text-gray-600 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={usernamePassword}
                  onChange={(e) => setUsernamePassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5A001A]/20 focus:border-[#5A001A]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={usernameLoading}
                className="w-full bg-[#5A001A] text-white p-3 rounded-lg font-semibold hover:bg-[#730021] transition disabled:opacity-50 mt-2"
              >
                {usernameLoading ? "Updating..." : "Update Username"}
              </button>
            </form>
          </div>
        </div>

        {/* Password Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Change Password
          </h2>
          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div>
              <label className="block font-medium text-sm text-gray-600 mb-2">
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5A001A]/20 focus:border-[#5A001A]"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-sm text-gray-600 mb-2">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5A001A]/20 focus:border-[#5A001A]"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-sm text-gray-600 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5A001A]/20 focus:border-[#5A001A]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={passwordLoading}
              className="w-full bg-[#5A001A] text-white p-3 rounded-lg font-semibold hover:bg-[#730021] transition disabled:opacity-50 mt-2"
            >
              {passwordLoading ? "Changing..." : "Change Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}