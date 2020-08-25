export function sortArrayByDate(array) {
    array.sort(function(a,b){
        return new Date(a.publishedAt) - new Date(b.publishedAt)
      })
}