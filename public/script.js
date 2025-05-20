// Hàm lấy danh sách NFT
async function getNFTs() {
    const walletAddress = document.getElementById('walletAddress').value;
    const loadingElement = document.getElementById('loading');
    const nftContainer = document.getElementById('nftContainer');

    if (!walletAddress) {
        alert('Vui lòng nhập địa chỉ ví!');
        return;
    }

    try {
        // Hiển thị loading
        loadingElement.style.display = 'block';
        nftContainer.innerHTML = '';

        // Gọi API endpoint của server
        const response = await fetch(`/api/nfts/${walletAddress}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Có lỗi xảy ra khi lấy dữ liệu NFT');
        }

        // Ẩn loading
        loadingElement.style.display = 'none';

        if (data.ownedNfts.length === 0) {
            nftContainer.innerHTML = '<div class="error">Không tìm thấy NFT nào trong ví này!</div>';
            return;
        }

        // Hiển thị từng NFT
        data.ownedNfts.forEach(nft => {
            const card = document.createElement('div');
            card.className = 'nft-card';

            // Xử lý hình ảnh NFT
            const imageUrl = nft.media[0]?.gateway || 'https://via.placeholder.com/200?text=No+Image';

            card.innerHTML = `
                <img src="${imageUrl}" alt="NFT #${nft.tokenId}" class="nft-image">
                <div class="nft-info">
                    <p><strong>Token ID:</strong> #${nft.tokenId}</p>
                    <p><strong>Tên:</strong> ${nft.title || 'Không có tên'}</p>
                    ${nft.description ? `<p><strong>Mô tả:</strong> ${nft.description}</p>` : ''}
                </div>
            `;

            nftContainer.appendChild(card);
        });

    } catch (error) {
        loadingElement.style.display = 'none';
        nftContainer.innerHTML = `<div class="error">Có lỗi xảy ra: ${error.message}</div>`;
    }
}