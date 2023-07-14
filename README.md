# dating-app
International dating app which allows users to search and message other potential matches from across the globe. App built using MERN (data stored in Mongo DB). You can access the demo and sign up on the site here: https://passportmatch.netlify.app

# App Features
* Real Time Messaging using socket.io
* Search users by name / gender / age-range / country of origin
* Upload image + video of user which displays on profile page
* Images and videos are also saved through cloudinary
* Ability for user to update and change their picture and self video
* Notification alert when receiving message
* Applicable for smaller screens

# In process
* Currently adding message board to allow users to post messages + upload images regarding anything they want for other users to see (based on continental selection)

# App Walkthrough
# Homepage
* Login / Signup built in component - allows users to add information ranging from country of origin and age to their personal image and video
* Brief information describing app outline and features to potential clients
<img src="screenshots/Homepage.png" />

![homepagegif](https://github.com/PatrickPachacz/dating-app/assets/123042779/59f3292a-270d-4113-9a99-8120acaac8bb)


<img src="screenshots/homepage2.png" />
<img src="screenshots/homepage3.png" />



# Dashboard 
* Sidedrawer (navbar) allowing users to navigate between other features of app
* Performs search engine which allows users to find others based on gender / age-range / country of origin
* Results that generate based on those specific criteria allows the viewer to access selected users profile page as well as directly message them
<img src="screenshots/dashboard.png" />
<img src="screenshots/realmatches.png" />

# Profile Page
* Display users basic information along with their image and personal video
* All users have access to viewing other profile pages
![profile](https://github.com/PatrickPachacz/dating-app/assets/123042779/1cea7000-4e64-4444-916d-2ccc80462028)

# Search user by name / email
* Search bar on left side of sidedrawer allows users to search by name or email
* Selecting a user navigates them to the chatpage where they have a chatbox allocated and saved between both clients
* After selecting and opening the chatbox between both users, they now have the ability to message one another
* User can also view recipients avatar
![search user](https://github.com/PatrickPachacz/dating-app/assets/123042779/663892ea-95da-4d10-9c16-5287380b6b22)
![Selecting user](https://github.com/PatrickPachacz/dating-app/assets/123042779/9965ca11-e703-44ff-8735-74622103b82f)

# Edit Profile
* Users can edit their name / image / or video at anytime
<img src="screenshots/edit.png" />

# Chatbox - Real-time Messaging / Notification
* Users can select which user they would like to communicate with
* Recipients avatar which includes their basic information can be opened 
* Message notifications will appear for users currently not engaged in the conversation

![Chatbox](https://github.com/PatrickPachacz/dating-app/assets/123042779/fd8f2215-13f2-4aa3-bddb-f94b31572cf0)
![notification](https://github.com/PatrickPachacz/dating-app/assets/123042779/173a26af-9195-4cfd-ac36-55a774071af3)

# Can be used on small screens
![smallscreen2](https://github.com/PatrickPachacz/dating-app/assets/123042779/33a95b8a-faa8-49e4-b0c4-656b135c982f)
