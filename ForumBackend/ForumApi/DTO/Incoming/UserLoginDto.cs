namespace ForumApi.DTO.Incoming
{
    public class UserLoginDto
    {
        [JsonPropertyName("identifier")]
        [StringLength(maximumLength: 128, MinimumLength = 3)]
        public string Identifier { get; set; } = string.Empty;
        [JsonPropertyName("password")]
        [StringLength(maximumLength: 128, MinimumLength = 6)]
        public string Password { get; set; } = string.Empty;
    }
}
