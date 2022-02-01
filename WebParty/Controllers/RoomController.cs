using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebParty.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        IBRepo _bl;
        public RoomController(IBRepo bl)
        {
            _bl = bl;
        }
        // GET: api/<RoomController>
        [HttpGet]
        public List<Room> Get()
        {
            return _bl.GetRooms();
        }

        // GET api/<RoomController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<RoomController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<RoomController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RoomController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
