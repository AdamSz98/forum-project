namespace ForumApi.DTO.Incoming
{
    public class UserLoginDto
    {
        [JsonPropertyName("username")]
        [StringLength(maximumLength: 128, MinimumLength = 3)]
        public string? Username { get; set; }
        [JsonPropertyName("email")]
        [StringLength(maximumLength: 128, MinimumLength = 3)]
        [EmailAddress]
        public string? Email { get; set; }
        [JsonPropertyName("password")]
        [StringLength(maximumLength: 128, MinimumLength = 8)]
        public string Password { get; set; } = string.Empty;
    }
}
