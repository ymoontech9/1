function searchYoutube() {
    var searchTerm = document.getElementById('searchTerm').value;
    if (searchTerm.trim() !== '') {
        var url = 'https://www.youtube.com/results?search_query=' + encodeURI(searchTerm);
        window.open(url, '_blank');
    } else {
        alert('검색어를 입력해주세요.');
    }
}
