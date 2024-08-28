
const glob = require('glob');
const fs = require('fs');

function getIcons() {
    const sets = [
        {
            path: 'assets/icons/heroicons',
            id: 'heroicons',
            title: 'Heroicons',
            icons: []
        },
        {
            path: 'assets/icons/remix',
            id: 'remix',
            title: 'Remix Icons',
            icons: []
        },
        {
            path: 'assets/icons/bootstrap',
            id: 'bootstrap',
            title: 'Bootstrap Icons',
            icons: []
        }
    ];

    sets.map((set) => {
        let icons = glob.sync(set.path + '/*.svg');

        icons.forEach((icon) => {
            set.icons.push({
                name: icon.replace(set.path + '/', '').replace('.svg', ''),
                contents: fs.readFileSync(icon, 'utf8')
            });
        });

        // Sort icons by name
        set.icons.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }

            if (a.name > b.name) {
                return 1;
            }

            return 0;
        });

        return set;
    });

    console.log(sets);

    return sets;
}

module.exports = () => {
    return getIcons();
}