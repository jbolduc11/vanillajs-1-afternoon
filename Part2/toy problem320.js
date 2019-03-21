const queue = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']


function warnTheSheep(queue) {
    const index=queue.indexOf('wolf')
 return index===queue.length-1?"Pls go away and stop eating my sheep"
 :`Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(queue));