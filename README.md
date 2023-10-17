<h1>NEMO's </h1>
(Deployed with Firebase -  https://nemos-663db.web.app)
<h2>Exotic aquarium fish online store </h2>
<h3>1. Purpose:</h3> I started this project to challenge myself. My goal was to make an online shop page, resembling a real one as a SPA with the knowledge I have. I wanted to practice and showcase my react and css and test some of the latest functionalities of React Router. I picked the topic of aquarium fish, partly because of my love for animals, partly because I pictured the design for this type of web application will be more colourful and interesting to make and then I found some different pages, which inspired me for the details and bits of the design pattern and functionalities.
<h3>2. Technologies :</h3>
I chose <strong>React</strong> as I find it really intuitive to work with, easy to set up and it's easy and fast to build and manage components. <br>
<strong>React Router</strong> has great functionalities fo workin with routes, navigation, forms, preloading data and custom error handling or routes. <br>
<strong>HTML</strong> is done by me from scratch, styling is done in <strong>CSS</strong> modules and globally by index.css. <br>
I used <strong>flickity</strong> for my carousel in the home page, so there is a css file for flickity stilizations as well. <br>
Back-end provider is firebase - <strong>Cloud Firestore</strong> - which I find very helpful and well structured, thats why i also use <strong>Firebase authentication</strong> with email/password sign in method. <br>
<strong>Fuse</strong> for the search functionality, since it's lightweight and the app is small-scaled <br>
<strong>React-cookie</strong> for cart item keeping of unregistered users.(This was a challenge for me since I haven't until now developed an app store, which allows unautheticated users to add items to the cart and the logic behind that was trying at first. I am still unsure if it is the right way to do it, but I am glad I found a different approach , than what I am used to)
<h3>3. App runtrough:</h3>
<h4>3.1. Navigation</h4> - There are main navigation elements, also buttons and card elements which are linked with the detail, store and cart pages
    <ul>
      <li>Header navigation - leads to login page and cart, after it shrinks on scroll has a dropdown for all store pages, cart icon holds the number of cart items</li>
      <li>Lower navigation - leads to the store pages</li>
      <li>Footer navigation - leads to the store pages, has dummy nvigation for FAQ(not done yet)</li>
      <li>Aside navigation - only in home - leads to the main sections</li> 
      <li>Breadcrumbs navigation - in detail and store pages</li>       
    </ul>
<h4>3.2. Home</h4> - home page is dynamic and has aside menu to switch fast between main sections:
    <ul>
      <li>Shop section - has links to all store catalog pages.</li>
      <li>Best Sellers - six of the most sold items in catalog</li>
      <li>Weekly offers - carousel with six items in discount, made with flickity</li>
      <li>New arrivals - a catalog with the 8 newest items</li>      
    </ul> 
<h4>3.3. Store</h4> - has pagination, header section with dummy description, individual cards lead to detail page of selected item, can add to cart while in catalog, has breadcrumbs navigation
    <ul>
      <li>Store - showcase of all items.</li>
      <li>Fish - only items with type fish</li>
      <li>Invertebrate - only items with type invertebrate</li>
      <li>Coral - only items with type coral</li>      
    </ul>
 <h4>3.4. Detail</h4> - opens from home page, search page, store page, has breadcrumbs navigation , from here you can adjust quantity and add item to cart
    <ul>
      <li>Gallery - images carousel that changes on click, works with keybord arrows also.</li>
      <li>Info section - name or species, price, add to cart button,dummy information.</li>
      <li>Additional info section - changes on click from additional info to description</li>
      <li>You-may-also-like section with dynamic content from same type items</li>      
    </ul>
<h4>3.5. Cart</h4> - all added items are shown, can be deleted from cart or their quanity adjusted
    <ul>
      <li>Navigation to checkout and complete order(not working yet)</li>
      <li>Banner-changes to the sum needed fro free shipping </li>
      <li>Table with added items in it</li>
      <li>Cart total section - calculates the whole sum, dummy coupon section(not working yet)</li>   
    </ul>
<h4>3.6. Authentication pages</h4> - login, register and forgotten-password pages are interlinked, authentication is note ready yet 
    <ul>
      <li>Login page</li>
      <li>Register page - accessible via login page, has subscribe to email checkbox</li>
      <li>Forgottern password page- accessible via login page</li>
      <li>Cart total section - calculates the whole sum, dummy coupon section(not working yet)</li>   
    </ul>

<h4>3.7. Special features</h4>
    <ul>
      <li>Search- search bar is located in header ,used fuse, there is a page that leads to a catalog if search is not succsessful</li>
      <li>Text us- a fixed element in the right down corner, it doesnt send a request to the backend</li>
      <li>Carousel- made with <a href="https://flickity.metafizzy.co/">flickity</a> in the home page it is set on infinite loop, showcases the discount items</li>       
    </ul>

<h3>4. In development:</h3>
Authentication service is already created and working, validation , error handling and dynamic changes to header are still in the works. Header will change on user login to show user email or name and will lead to user account page. Search pagination is not working properly and needs to be revised. Appy coupon and to checkout will be made functional. State management emprovements will be done after I finish up my reasearch. Lazy loading will be applied in the final stages of developement.
<h3>5. Conslusion:</h3>   
I have used the background, animation , transition, transform and position property in CSS in different scenarios and now I have much clearer understanding of their proper use. I have used video and picture media in the site in varous positionings. I have used previously unknown to me features of React router like react router form and the action and loader functionalities,NavLinks and way to stye it, I made my router made up in a different way than before(using RouterProvider and createBrowserRouter), using  a Root element and a default Error page. I set up my architecture with pages folder seperate from my component folder and my css modules inside the individual component folder, which is much more convinient in my opinion. I have a deeper understanding of useState, useEffect, useRef hoosks, dynamic styling , of reative and absolute paths.<br/>
All in all it was great fun to take on a new, more complex project and also learn more features of React and CSS.
