# Game collection

This app is designed to work as a way of tracking my personal video game collection, with a central database of games that can
be added to a single collection list.

This app is built off of create-react-app and uses Express, MongoDB, and Mongoose on the back-end. The initial setup of the
client and server-side apps was assisted by [this blog post](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)
and the folder structure and idea to use Concurrently came from [this blog post](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/).

The Express server is compiled as part of create-react-app's Webpack build. This is not ideal, but implemented as a way of getting started quickly.
In the future, the express server may be moved out to its own repo and build system.
