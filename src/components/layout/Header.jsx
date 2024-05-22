import { Bell, LogOut, Menu, Plus, Search, Users } from "lucide-react";

export default function Header() {
  return (
    <>
      <nav className="bg-blue-950 text-white py-3 fixed w-screen">
        <div className="mx-4 md:mx-16 flex justify-between">
          <div>
            <div className="md:hidden icon-button">
              <Menu className="md:hidden" />
            </div>
            <h1 className="hidden md:text-2xl md:block">Chatify</h1>
          </div>
          <div className="flex md:gap-6 gap-1">
            <div className="group relative icon-button">
              <Search className="cursor-pointer" />
              <span className="tooltip-text">Search</span>
            </div>
            <div className="group relative icon-button">
              <Plus className="cursor-pointer" />
              <span className="tooltip-text">Add</span>
            </div>
            <div className="group relative icon-button">
              <Users className="cursor-pointer" />
              <span className="tooltip-text">Users</span>
            </div>
            <div className="group relative icon-button">
              <Bell className="cursor-pointer" />
              <span className="tooltip-text">Notifications</span>
            </div>
            <div className="group relative icon-button">
              <LogOut className="cursor-pointer" />
              <span className="tooltip-text">Log Out</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
