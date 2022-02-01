using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebParty.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AboutPlayerController : ControllerBase
    {
        IBRepo _bl;
        public AboutPlayerController(IBRepo bl)
        {
            _bl = bl;
        }
        // GET: api/<AboutPlayerController>
        [HttpGet]
        public List<AboutPlayer> Get()
        {
            return _bl.GetAboutPlayers();
        }

        // GET api/<AboutPlayerController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AboutPlayerController>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<AboutPlayerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<AboutPlayerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
