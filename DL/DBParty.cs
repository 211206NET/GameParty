using Microsoft.EntityFrameworkCore;
using Models;
namespace DL;

public class DBParty: IREPO
{
    private PRDBContext _context;
    public DBParty(PRDBContext context)
    {
        _context = context;
    }
    //Get Alls
    public List<AboutPlayer> GetAboutPlayers()
    {
        return _context.AboutPlayer.Select(r => r).ToList();
    }
    public List<Game> GetGames()
    {
        return _context.Game.Select(r => r).ToList();
    }
    public List<Player> GetPlayers()
    {
        return _context.Player.Select(r => r).ToList();        
    }
    public List<Room> GetRooms()
    {
        return _context.Room.Select(r => r).ToList();
    }


}