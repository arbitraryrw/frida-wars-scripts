const target = 'libsecret.so';
let base = null;

function ascii(input) {
    var result = '';
    var arr = input.match(/.{1,8}/g);
    for (var i = 0; i < arr.length; i++) {
        result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
    }
    return result;
}

console.log('[i] Looking for library');
Process.enumerateModulesSync().forEach(mod => {
    if (mod.name == target){
        base = mod.base;
        mod.enumerateExports().forEach(e => {
            if (e.name == 'Java_com_secret_fridawars_MainActivity_init')
            {
                console.log(`[i] Attaching to 0x15A8 of ${e.name}`)
                const end = ptr('0x15A8').add(base);
                Interceptor.attach(end, {
                    onEnter: function() {
                        let str = '';
                        const start = this.context.x8;
                        for (let i = 0; i < 214; i++) {
                            str += start.add(i).readS8().toString();
                        }
                        const a = ascii(str);
                        if (a.includes('secRet')) {
                            console.log(`BINGO: ${a}`);
                        }
                    }
                })
                return;
            }
        });
        return;
    }
});
