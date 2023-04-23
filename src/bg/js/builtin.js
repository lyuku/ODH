class Builtin {
    constructor() {
        this.dicts = {};
    }

    async loadData() {
        this.dicts['collins'] = [];
        // this.dicts['collins'] = await Builtin.loadData('data/collins.json');
    }

    findTerm(dictname, term) {
        // Since there is no avarible dictionary, build in is not useable. Just return null.
        return null;
        // const dict = this.dicts[dictname];
        // return dict.hasOwnProperty(term) ? JSON.stringify(dict[term]):null;
    }

    static async loadData(path) {
        return new Promise((resolve, reject) => {
            let request = {
                url: path,
                type: 'GET',
                dataType: 'json',
                timeout: 5000,
                error: (xhr, status, error) => reject(error),
                success: (data, status) => resolve(data)
            };
            $.ajax(request);
        });
    }
    
}