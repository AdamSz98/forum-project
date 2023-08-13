using System.Security.Claims;

namespace ForumApi.Helpers
{
    public class UserHelper : IUserHelper
    {
        private readonly IConfiguration _configuration;
        public UserHelper(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public bool IsValidEmail(string input)
        {
            return Regex.IsMatch(input, @"^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$");
        }
        public string HashedPassword(string password)
        {
            SHA256 hash = SHA256.Create();
            var passwordBytes = Encoding.Default.GetBytes(password);
            var hashedPassword = hash.ComputeHash(passwordBytes);
            var hexPassword = Convert.ToHexString(hashedPassword);
            return hexPassword;
        }
        public bool VerifyPasswordHash(string userInput, string userPassword)
        {
            var hashedUserInput = HashedPassword(userInput);

            return userPassword == hashedUserInput;
        }
        public string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim("Id", user.Id.ToString()),
                new Claim("Username", user.Username),
                new Claim("email", user.Email)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}
