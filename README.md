## <h1 align="center">Mario-Party</h1>
P2

Team Members: Sam Hammond, Garrett Morgan, Terrence Browning, Christian Francois, Dennis Sanders

# <h2 align="center"> Overview: </h2>
<p align="center">
<br>
An app for adding, and talking to friends. Create an account and create a room to talk about your interests. Use the chat to discuss your interests or play a game with your friends. They be will be able to keep track of your wins and loses in those games.
</p>
<br>
**Functionality:**
- Use Auth0 to signup and login
- Users can add an about me to add your favorite games
- Create a room
- Chat in the room or play games with friends
- Get added to the Leaderboard 


Main Ideas:
Have a place from gamers to chill and play games together online 
Use Socket.io for multiplayer and server 
Create rooms for players to join

External ApI Integration:
voice chat or voice recordings. (use Nodejs)
Socket IO

Features:
Chatroom to hang out with friends 
Games
Catalog of all your games
Chat
faq
general
friends
party
looking for group

User
Profile
Profile pic
Username
Interest
Player lvl (possibly gain member points by being active)

Status
Currently playing
Open to chat/or not
Party status

Models
Games
Id
Game name
Difficulty rating
Player
Id
Username
Password
Interest
Player lvl
Game list 
community list

Voice
Voice ID
Room ID
Group size
Topic
Player list
Chat
Chat id
Chat name/topic


User Stories 
Sign up for an account 
Join rooms by code 
Post chat and recording with live voice
See other users info (favorite game, about, ect)
Play games with other users 


Stretch Goals 
Have games on the site (tic tac toe, hangman, rock paper scissors)
Keep track of wins/losses of games
(Possibly) spotify or youtube api for sharing 
Have multiple mini games (similar to mario party) 
Keep track of player life and who is winning 



Code Stack 
C#
Xunit testing 
SQL 
Serilog 
ASP.NET
socket.io
