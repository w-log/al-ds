const findLocation = (map, startLine, endLine, cache) => {

}

export const solution = (subway, start, end) => {
    const map = {};
    let startLine, endLine;
    for(let i = 0; i < subway.length; i++) {
        const ways = subway[i].split(' ');
        for(let j = 0; j < ways.length; j++) {
            const val = parseInt(ways[j]);
            if(val === start) {
                startLine = i;
            }else if(val === end) {
                endLine = i;
            }

            if(Array.isArray(map[ways[j]])) {
                map[ways[j]].push(i);
            }else {
                map[ways[j]] = [i];
            }
        }
    }
    
    const graph = {};
    for(const key in map) {
        if(map[key].length > 1) {
            const arr = map[key];

            for(let i = 0; i < arr.length; i++) {
                if(!graph[arr[i]]) graph[arr[i]] = {};
                for(let j = 0; j < arr.length; j++) {
                    if(arr[i]=== arr[j]) continue;
                    graph[arr[i]][arr[j]] = 1;
                }
            }
        }
    }
    
    if(startLine === endLine) return 0;

    const queue = [];
    const visited = { [startLine]: true };
    let cnt = 0;
    queue.push(graph[startLine]);

    while(queue.length > 0) {
        const elem = queue.shift();
        const keys = Object.keys(elem);
        
        for(let key of keys) {
            
            if(visited[key]) {
                continue;
            }

            if(endLine == key) {
                return ++cnt;
            } 

            visited[key] = true;
            queue.push(graph[key]);
        }       
        cnt++;
    }
}