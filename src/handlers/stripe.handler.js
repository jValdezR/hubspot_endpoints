// Handler for a "Connect Reader" button
async function connectReaderHandler() {
    const config = {simulated: true};
    const discoverResult = await terminal.discoverReaders(config);
    if (discoverResult.error) {
      console.log('Failed to discover: ', discoverResult.error);
    } else if (discoverResult.discoveredReaders.length === 0) {
      console.log('No available readers.');
    } else {
      // Just select the first reader here.
      const selectedReader = discoverResult.discoveredReaders[0];
  
      const connectResult = await terminal.connectReader(selectedReader);
      if (connectResult.error) {
        console.log('Failed to connect: ', connectResult.error);
      } else {
        console.log('Connected to reader: ', connectResult.reader.label);
      }
    }
  }