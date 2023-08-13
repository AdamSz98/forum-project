namespace ForumApi.DTO.Incoming
{
    public class UserRegistrationDto
    {
        [JsonPropertyName("username")]
        [StringLength(maximumLength: 64, MinimumLength = 3)]
        public string Username { get; set; } = string.Empty;
        [JsonPropertyName("email")]
        [StringLength(maximumLength: 128, MinimumLength = 3)]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        [JsonPropertyName("password")]
        [StringLength(maximumLength: 30, MinimumLength = 6)]
        public string Password { get; set; } = string.Empty;
    }
}
