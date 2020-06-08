<p align="center">
  <img src="https://imgur.com/ixV1dX4.png" alt="Sidebar with higlighted item">
</p>

# Postman Sidebar Expand

Linking someone to a specific method on Postman documenter won't expend their sidebar (folders). I created this quick bookmarklet to help find the linked item in the sidebar.

It will recursively open the nested folders until it gets to the top.


# Usage

Add this code as your bookmark. 

```
javascript:(function(){%22use%20strict%22%3Bvar%20hash%3Dwindow.location.hash.substr(1)%3Bif(hash)for(var%20linkInSidebar%3Ddocument.querySelector('%5Bhref%5E%3D%22%23'.concat(hash%2C'%22%5D'))%2CCLASS_CHECK%3D%22folder%22%2CREQUEST_CLASS_CHECK%3D%22request%22%2CcurrentDomElement%3DlinkInSidebar%3BcurrentDomElement.classList.contains(CLASS_CHECK)%26%26currentDomElement.classList.add(%22open%22%2C%22user-opened%22)%2C%22UL%22%3D%3D%3DcurrentDomElement.nodeName%26%26currentDomElement.classList.add(%22display-requests%22%2C%22user-opened%22)%2CcurrentDomElement.classList.contains(REQUEST_CLASS_CHECK)%26%26(currentDomElement.style.backgroundColor%3D%22yellow%22)%2C(currentDomElement%3DcurrentDomElement.parentElement)%7C%7CcurrentDomElement%26%26%22BODY%22!%3D%3DcurrentDomElement.nodeName%3B)%3B})();
```

When you are on the page click the bookmark.
