import CreatePost from "./CreatePost";
import Home from "./Home";
import Notification from "./Notification";
import Search from "./Search";
import ProfileLink from "./ProfileLink";

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notification />
      <CreatePost />
      <ProfileLink />
    </>
  );
};

export default SidebarItems;
