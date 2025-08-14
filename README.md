# Smart Router Example

A Node.js example demonstrating how to use the Thena Router SDK to find optimal trading routes on the BSC (Binance Smart Chain) network.

## Description

This project showcases how to:

- Initialize the Thena Router SDK
- Define token pairs for trading (WBNB → THE)
- Generate optimal trading routes
- Parse and display route information

## Prerequisites

- Node.js (version 10 or higher)
- Yarn package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/lamptzz/smart-router-example.git
cd smart-router-example
```

2. Install dependencies:

```bash
yarn install
```

## Usage

### Running the Script

Execute the main script using one of the following methods:

**Using npm script:**

```bash
npm run execute
```

**Using yarn:**

```bash
yarn execute
```

**Direct execution:**

```bash
node index.js
```

### What the Script Does

The script performs the following operations:

1. **Initializes the Router**: Creates an AlphaRouter instance connected to BSC
2. **Defines Tokens**: Sets up WBNB (input) and THE (output) tokens
3. **Generates Route**: Finds the optimal trading route for 1000 WBNB → THE
4. **Displays Results**: Outputs the route information in a readable format

### Configuration

The script is configured to:

- Use BSC (Binance Smart Chain) network
- Connect to BSC RPC endpoint: `https://bsc-dataseed.binance.org`
- Trade 1000 WBNB for THE tokens
- Use exact input trade type

## Dependencies

- `@thenafi/router-sdk`: Router SDK for finding optimal trading routes
- `thena-sdk-core`: Core SDK for token and chain definitions

## Project Structure

```
smart-router-example/
├── index.js          # Main execution script
├── package.json      # Project configuration and dependencies
├── yarn.lock         # Locked dependency versions
└── README.md         # This file
```

## Example Output

When you run the script, it will output the optimal trading route information, including:

- Route path
- Amounts at each step
- Gas estimates
- Price impact

## Troubleshooting

### Common Issues

1. **Network Connection**: Ensure you have a stable internet connection to access the BSC RPC endpoint
2. **Node Version**: Make sure you're using Node.js version 10 or higher
3. **Dependencies**: If you encounter module errors, try running `yarn install` again

### Error Messages

- If you see "Error: no test specified", this is expected as the test script is not implemented
- Network timeouts may occur if the BSC RPC endpoint is slow - the script will retry automatically

## Contributing

Feel free to submit issues and enhancement requests!

## License

ISC License - see the [LICENSE](LICENSE) file for details.

## Repository

- **GitHub**: https://github.com/lamptzz/smart-router-example
- **Issues**: https://github.com/lamptzz/smart-router-example/issues
