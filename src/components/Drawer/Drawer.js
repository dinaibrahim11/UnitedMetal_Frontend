import React from 'react'
import './Drawer.css';
const Drawer = props =>{
    return(
    <ul className="Drawer" role="menubar">
    <li data-context="you">
      <a role="menuitem" data-track="gnYouMainClick" className="gn-title you" href="/photos/192903766@N08/" aria-haspopup="true" aria-expanded="false" aria-label="You">You</a>
      <ul className="gn-submenu" role="menu" aria-label="submenu">
        <li className="menuitem">
          <a role="menuitem" aria-label="About" data-track="gnYouAboutClick" href="/people/192903766@N08/">About</a>
        </li>
        <li className="menuitem" role="menuitem" aria-label="Photostream">
          <a data-track="gnYouPhotostreamClick" href="/photos/192903766@N08/">Photostream</a>
        </li>
        <li className="menuitem" role="menuitem" aria-label="Albums">
          <a data-track="gnYouSetsClick" href="/photos/192903766@N08/albums">Albums</a>
        </li>
        <li className="menuitem" role="menuitem" aria-label="Faves">
          <a data-track="gnYouFavoritesClick" href="/photos/192903766@N08/favorites">Faves</a>
        </li>
        <li className="menuitem" role="menuitem" aria-label="Galleries">
          <a data-track="gnYouGalleriesClick" href="/photos/192903766@N08/galleries">
            Galleries
          </a>
        </li>
        <li className="menuitem" role="menuitem" aria-label="Groups">
          <a data-track="gnYouGroupsClick" href="/groups">Groups</a>
        </li>
        <li className="menuitem" role="menuitem" aria-label="Camera Roll">
          <a data-track="gnYouCameraRollClick" href="/cameraroll">Camera Roll</a>
        </li>
        <li className="divider" tabIndex={-1}>
          &nbsp;
        </li>
        <li className="menuitem" role="menuitem" aria-label="Recent Activity">
          <a data-track="gnYouRecentActivityClick" href="/activity">Recent Activity</a>
        </li>
        <li className="menuitem" role="menuitem" aria-label="People">
          <a data-track="gnYouPeopleClick" href="/photos/friends">People</a>
        </li>
        <li className="menuitem" role="menuitem" aria-label="Organize">
          <a data-track="gnYouOrganizeClick" href="/photos/organize">Organize</a>
        </li>
      </ul>
    </li>
    <li data-context="explore">
      <a role="menuitem" data-track="gnExploreMainClick" className="gn-title explore" href="/explore" aria-haspopup="true" aria-expanded="false" aria-label="Explore">
        Explore
      </a>
      <ul className="gn-submenu" role="menu" aria-label="submenu">
        <li role="menuitem" aria-label="Recent Photos">
          <a data-track="gnExploreRecentPhotosClick" href="/explore">Recent Photos</a></li>
        <li role="menuitem" aria-label="Trending">
          <a data-track="gnExploreTagsClick" href="/photos/tags">Trending</a></li>
        <li role="menuitem" aria-label="Events">
          <a data-track="gnExploreEventsClick" href="/events">Events</a>
        </li>
        <li role="menuitem" aria-label="The Commons">
          <a data-track="gnExploreTheCommonsClick" href="/commons">The Commons</a>
        </li>
        <li role="menuitem" aria-label="Flickr Galleries">
          <a data-track="gnExploreGalleriesClick" href="/galleries">Flickr Galleries</a>
        </li>
        <li role="menuitem" aria-label="World Map">
          <a data-track="gnExploreWorldMapClick" href="/map">World Map</a>
        </li>
        <li role="menuitem" aria-label="Camera Finder">
          <a data-track="gnExploreCameraFinderClick" href="/cameras">Camera Finder</a>
        </li>
        <li role="menuitem" aria-label="Flickr Blog">
          <a data-track="gnExploreFlickrBlogClick" href="https://blog.flickr.net/">Flickr Blog</a>
        </li>
      </ul>
    </li>
    <li className="gn-create" data-context="create">
      <a role="menuitem" data-track="gnCreateMainClick" className="gn-title create" href="/prints" aria-haspopup="true" aria-expanded="false" aria-label="Prints">
        <span>Prints</span>
      </a>
      <ul className="gn-submenu" role="menu" aria-label="submenu">
        <li className="menuitem" role="menuitem">
          <a role="button" aria-label="Prints & Wall Art" className="prints-button">
            Prints &amp; Wall Art
          </a>
        </li>
        <li className="menuitem" role="menuitem">
          <a aria-label="Photo Books" href="/create">
            Photo Books
          </a>
        </li>
        <li className="menuitem cart" role="menuitem">
          <a aria-label="View Cart" href="https://secure.flickrprints.com/checkout" className="cart-link disabled">
            View Cart
          </a>
        </li>
      </ul>
    </li>
    <li className="gn-get-pro">
      <a role="menuitem" data-track="gnGetProMainClick" className="gn-title" href="/account/upgrade/pro" aria-label="Get Pro">Get Pro</a>
    </li>
  </ul>


    );

};
export default Drawer;