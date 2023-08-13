global using System.ComponentModel.DataAnnotations;
global using System.IdentityModel.Tokens.Jwt;
global using System.Security.Cryptography;
global using System.Security.Claims;
global using System.Text;
global using System.Text.Json.Serialization;
global using System.Text.RegularExpressions;

global using Microsoft.AspNetCore.Authentication.JwtBearer;
global using Microsoft.AspNetCore.Authorization;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.IdentityModel.Tokens;
global using AutoMapper;

global using ForumApi.Data;
global using ForumApi.DTO.Incoming;
global using ForumApi.Helpers;
global using ForumApi.Models;
global using ForumApi.Repositories;