namespace BL;

public class BLParty : IBRepo
{
    private IRepo _dl;

    public BLParty(IRepo repo)
    {
        _dl = repo;
    }

    //Get all
    public List<AboutPlayer> GetAboutPlayers()
    {
        return _dl.GetAboutPlayers();
    }
    public List<Game> GetGames()
    {
        return _dl.GetGames();
    }
    public List<Player> GetPlayers()
    {
        return _dl.GetPlayers();
    }
    public List<Room> GetRooms()
    {
        return _dl.GetRooms();
    }


    //Get by ID
    public AboutPlayer GetAboutPlayersByID(int aboutPlayerID)
    {
        return _dl.GetAboutPlayersByID(aboutPlayerID);
    }
    public Game GetGameByID(int gameID)
    {
        return _dl.GetGameByID(gameID);
    }
    public Player GetPlayerByID(int playerID)
    {
        return _dl.GetPlayerByID(playerID);
    }
    public Room GetRoomByID(int roomID)
    {
        return _dl.GetRoomByID(roomID);
    }


    //Add
    public AboutPlayer addAboutPlayer(AboutPlayer aboutPlayerToAdd)
    {
        return _dl.addAboutPlayer(aboutPlayerToAdd);
    }
    public Game addGame(Game gameToAdd)
    {
        return _dl.addGame(gameToAdd);
    }
    public Player addPlayer(Player playerToAdd)
    {
        return _dl.addPlayer(playerToAdd);
    }
    public Room addRoom(Room roomToAdd)
    {
        return _dl.addRoom(roomToAdd);
    }

    
    //Delete 
    public void deleteAboutPlayer(AboutPlayer aboutPlayerToDelete)
    {
        _dl.deleteAboutPlayer(aboutPlayerToDelete);
    }
    public void deleteGame(Game gameToDelete)
    {
        _dl.deleteGame(gameToDelete);
    }
    public void deletePlayer(Player playerToDelete)
    {
        _dl.deletePlayer(playerToDelete);
    }
    public void deleteRoom(Room roomToDelete)
    {
        _dl.deleteRoom(roomToDelete);
    }
    
    
}