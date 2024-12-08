document.querySelectorAll(".viewMoreBtn").forEach((btn, index) => {
    const moreContent = document.querySelectorAll(".moreContent")[index];
    const paragraph = btn.closest('p'); 
    const icon = btn.querySelector("i"); 

    moreContent.style.display = 'none'; 

    btn.addEventListener('click', () => {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'inline'; 
            btn.firstChild.textContent = 'View Less '; 
            paragraph.style.transform = 'scale(1.1)'; 
            icon.style.transform = 'rotate(180deg)'; 
        } else {
            moreContent.style.display = 'none'; 
            btn.firstChild.textContent = 'View More '; 
            paragraph.style.transform = 'scale(1)'; 
            icon.style.transform = 'rotate(0deg)'; 
        }
    });
});

