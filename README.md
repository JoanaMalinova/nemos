<h1>Nemos </h1>
(Deployed with Firebase -  https://nemos-663db.web.app)
<h2>Exotic aquarium fish online store </h2>
<h3>Description</h3>
<h4>1. Purpose:</h4> I started this project to challenge myself. My goal was to make an online shop page, resembling a real one as a SPA with the knowledge I have. I wanted to practice and showcase my react and css and test some of the latest functionalities of React Router.
<h4>2. Technologies :</h4>
I chose <strong>React</strong> as I find it really intuitive to work with, easy to set up and it's easy and fast to build and manage components. <br>
<strong>React Router</strong> has great functionalities fo workin with routes, navigation, forms, preloading data and custom error handling or routes. <br>
<strong>HTML</strong> is done by me from scratch, styling is done in <strong>CSS</strong> modules and globally by index.css. <br>
I used <strong>flickity</strong> for my carousel in the home page, so there is a css file for flickity stilizations as well. <br>
Back-end provider is firebase - <strong>Cloud Firestore</strong> - which I find very helpful and well structured, thats why i also use <strong>Firebase authentication</strong> with email/password sign in method. <br>
<strong>Fuse</strong> for the search functionality, since it's lightweight and the app is small-scaled <br>
<strong>React-cookie</strong> for cart item keeping of unregistered users.(This was a challenge for me since I haven't until now developed an app store, which allows unautheticated users to add items to the cart and the logic behind that was trying at first. I am still unsure if it is the right way to do it, but I am glad I found a different approach , than what I am used to)
<h4>3. App runtrough</h4>
<ul>
  <li>Header</li>  
  <li>Home - home page is dynamic and has aside menu to switch fast between main sections:
    <ul>
      <li>Shop section - has links to all store catalog pages.</li>
      <li>Best Sellers - six of the most sold items in catalog</li>
      <li>Weekly offers - carousel with six items in discount, made with flickity</li>
      <li>New arrivals - a catalog with the 8 newest items</li>      
    </ul>
  </li>
  <li>Store - has pagination, header section with dummy description, individual cards lead to detail page of selected item, can add to cart while in catalog, has breadcrumbs navigation
    <ul>
      <li>Store - showcase of all items.</li>
      <li>Fish - only items with type fish</li>
      <li>Invertebrate - only items with type invertebrate</li>
      <li>Coral - only items with type coral</li>      
    </ul>
  </li>
   <li>Detail - 
    <ul>
      <li>Gallery - images carousel that changes on click, works with keybord arrows also.</li>
      <li>Info section - name or species, price, add to cart button, dummy information.</li>
      <li>Additional info section - changes on click from additional info to description</li>
      <li>You-may-also-like section with dynamic content from same type items</li>      
    </ul>
  </li>  
</ul> 

Authentication- validation, error handling and dynamic changes to header are the next step of the project. 
