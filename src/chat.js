// Function to create a connection object
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server. Here we will just print to console

  // Function to connect to the specified room at the server URL
  const connect = () => {
    // Log a message indicating the connection attempt
    console.log(
      '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
    );
  };

  // Function to disconnect from the specified room at the server URL
  const disconnect = () => {
    // Log a message indicating disconnection
    console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
  };

  // Return the connect and disconnect functions as properties of the connection object
  return {
    connect,
    disconnect
  };
}
