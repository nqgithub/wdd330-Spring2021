const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);

input.addEventListener('blur', () => alert('blurred'), false);

input.addEventListener('change', () => alert('changed'), false);

input.addEventListener('change', () => alert('changed'), false);

input.value = 'Search Here';

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

