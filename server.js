require('dotenv').config();
const express = require('express');
const path = require('path');
const { Alchemy, Network } = require('alchemy-sdk');

const app = express();
const port = process.env.PORT || 3000;

// Debug: Kiểm tra API key
console.log('API Key:', process.env.ALCHEMY_API_KEY);

// Cấu hình Alchemy SDK
const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.BASE_MAINNET
};

// Debug: Kiểm tra cấu hình
console.log('Alchemy Config:', { ...config, apiKey: config.apiKey ? 'exists' : 'missing' });

const alchemy = new Alchemy(config);

// Phục vụ các file tĩnh
app.use(express.static('public'));

// API endpoint để lấy NFTs
app.get('/api/nfts/:address', async (req, res) => {
    try {
        const address = req.params.address;
        const contractAddress = '0x0e381cd73faa421066dc5e2829a973405352168c';

        // Debug: Log thông tin request
        console.log('Requesting NFTs for:', { address, contractAddress });

        const nfts = await alchemy.nft.getNftsForOwner(address, {
            contractAddresses: [contractAddress]
        });

        res.json(nfts);
    } catch (error) {
        console.error('Lỗi chi tiết:', error);
        res.status(500).json({ error: error.message });
    }
});

// Route mặc định trả về trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});