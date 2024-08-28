
const glob = require('glob');
const fs = require('fs');

function getIcons() {
    const icons = {
        heroicons: {
            title: 'Heroicons',
            icons: []
        },
        remix: {
            title: 'Remix Icons',
            icons: []
        }
    }
    const heroicons = glob.sync('assets/icons/heroicons/*.svg');
    const remix = glob.sync('assets/icons/remix/*.svg');

    heroicons.forEach((icon) => {
        icons.heroicons.icons.push({
            name: icon.replace('assets/icons/heroicons/', '').replace('.svg', ''),
            contents: fs.readFileSync(icon, 'utf8')
        });
    });

    remix.forEach((icon) => {
        icons.remix.icons.push({
            name: icon.replace('assets/icons/remix/', '').replace('.svg', ''),
            contents: fs.readFileSync(icon, 'utf8')
        });
    });

    // Sort by icon name
    icons.heroicons.icons.sort((a, b) => a.name.localeCompare(b.name));
    icons.remix.icons.sort((a, b) => a.name.localeCompare(b.name));

    return icons;
}

module.exports = () => {
    return getIcons();
}