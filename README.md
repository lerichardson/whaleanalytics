# Whale Analytics
A simple, in-beta analytics engine in node.js
If you would like to see this become a real thing, please press the "Sponsor" button because I need funding haha.

## The prospect
Analytics suck. They violate your privacy, are hard to understand and often don't even serve their purpose.  
I try to fix this by making Whale Analytics, a self-hosted, privacy-friendly analytics service that:
* Doesn't use third-party cookies
* Is easy to set up and understand
* Respects the Do Not Track header  
And, in the future, hopefully use A.I. to help owners understand what works and what doesn't, what users like and don't like.
## How it works
When you call the script, server/script.js writes the information needed, like adding a visit, the user's browser type, and amount of time spent to a JSON file.  
When you go to the dashboard, client/showData.js reads the data and creates a graph. 
## Privacy friendly
Read the Do Not Track header:  
* Adds a visit and time spent, but not the browser type or approximate location  
Data collected:  
* Visit  
* Visit Length  
* Browser  
* Approximate Location based on IP address (Country, not State/County/City)  
Doesn't track across websites:
* This is why it's self hosted. (Also because I'm broke)
## Contributing
Just [create an issue](https://github.com/lerichardson/whaleanalytics/issues/new) or better yet, [create a pull request](https://github.com/lerichardson/whaleanalytics/compare)
