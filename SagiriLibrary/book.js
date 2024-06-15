const pages = document.querySelectorAll('.page');
        let currentPage = 0;
        const pageNum = document.getElementById('pageNum');

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (currentPage > 0) {
                pages[currentPage].classList.remove('active');
                currentPage--;
                pages[currentPage].classList.add('active');
                pageNum.textContent = `Page ${currentPage + 1}`;
            }
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (currentPage < pages.length - 1) {
                pages[currentPage].classList.remove('active');
                currentPage++;
                pages[currentPage].classList.add('active');
                pageNum.textContent = `Page ${currentPage + 1}`;
            }
        });