# # Use the official .NET SDK image to build the app
# FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
# WORKDIR /app

# # Copy csproj and restore as distinct layers
# COPY *.csproj ./
# RUN dotnet restore

# # Copy the rest of the application code
# COPY . ./
# RUN dotnet publish -c Release -o out

# # Build runtime image
# FROM mcr.microsoft.com/dotnet/aspnet:7.0
# WORKDIR /app
# COPY --from=build-env /app/out .

# # Expose the port that your API is listening on
# EXPOSE 80

# # Define the entry point for the container
# ENTRYPOINT ["dotnet", "YourProjectName.dll"]
# ```
#

# # Build the Docker image
# ```bash
# docker build -t scan-documents .
# ```
#
# # Run the Docker container
# ```bash
# docker run -d -p 8080:80 --name scan-documents scan-documents
# ```
#
# # Test the API
# ```bash
# curl -X POST "http://localhost:8080/api/scan" -H "Content-Type: application/json" -d "{\"url\":\"https://www.example.com\"}"
# ```
#
# # Stop the Docker container
# ```bash
# docker stop scan-documents
# ```
#
# # Remove the Docker container
# ```bash
# docker rm scan-documents
# ```
#
# # Remove the Docker image
# ```bash
# docker rmi scan-documents
# ```
#
# # Remove all Docker containers
# ```bash
# docker rm $(docker ps -a -q)
# ```
#
# # Remove all Docker images
# ```bash
# docker rmi $(docker images -q)
# ```
#
# # Remove all Docker volumes
# ```bash
# docker volume rm $(docker volume ls -q)
# ```
#
#Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the application code
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build-env /app/out .

# Expose the port that your API is listening on
EXPOSE 8080

# EXPOSE 5001
#ENV ASPNETCORE_HTTP_PORT=http://*:5152
# ENV ASPNETCORE_URLS=https://*:5000
# Define the entry point for the container
ENTRYPOINT ["dotnet", "ScanDocuments.dll"]
