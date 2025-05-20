# Ứng dụng Xem NFT trên BASE Mainnet

Ứng dụng Node.js đơn giản để xem danh sách NFT từ một ví Ethereum trên mạng BASE Mainnet.

## Yêu cầu hệ thống

- Node.js (phiên bản 14.0.0 trở lên)
- npm (Node Package Manager)

## Cài đặt

1. Clone hoặc tải về dự án

2. Cài đặt các dependencies:
```bash
npm install
```

3. Tạo file môi trường:
- Tạo file `.env` trong thư mục gốc của dự án
- Thêm API key của Alchemy vào file `.env`:
```env
ALCHEMY_API_KEY=your-api-key-here
PORT=3000
```

## Cách lấy Alchemy API Key

1. Đăng ký tài khoản tại [Alchemy.com](https://www.alchemy.com/)
2. Tạo ứng dụng mới:
   - Chọn mạng "BASE Mainnet"
   - Đặt tên cho ứng dụng
3. Sau khi tạo xong, copy API Key và dán vào file `.env`

## Chạy ứng dụng

1. Chạy trong môi trường development (có auto-reload):
```bash
npm run dev
```

2. Hoặc chạy trong môi trường production:
```bash
npm start
```

3. Mở trình duyệt và truy cập:
```
http://localhost:3000
```

## Cách sử dụng

1. Nhập địa chỉ ví Ethereum vào ô tìm kiếm
2. Nhấn nút "Xem NFT"
3. Đợi hệ thống tải dữ liệu
4. Xem danh sách NFT hiển thị với các thông tin:
   - Hình ảnh NFT
   - Token ID
   - Tên NFT
   - Mô tả (nếu có)

## Lưu ý

- Ứng dụng chỉ hiển thị NFT từ hợp đồng: `0x0e381cd73faa421066dc5e2829a973405352168c`
- Cần có kết nối internet để sử dụng
- Giữ API Key bảo mật, không chia sẻ cho người khác

## Cấu trúc thư mục

```
├── public/             # Files frontend
│   ├── index.html      # Giao diện người dùng
│   ├── styles.css      # Styles cho giao diện
│   └── script.js       # Logic xử lý frontend
├── server.js           # Server Node.js
├── package.json        # Thông tin dự án và dependencies
├── .env                # Biến môi trường
└── README.md           # Hướng dẫn sử dụng
```