const config = {
    uiText: {
        result: "The amount of your total combos is ",
        conclusion: 'whether it is a lot or a little is up to you.',
        accordionTitle: 'clothing recycling centers in London',
        article: 'made with help of ldnfashion.com',
        articleUrl: 'https://www.ldnfashion.com/features/best-places-to-recycle-clothes-london/',
        clothesTypes: [
            {
                title: 'trousers & jeans',
                defaultValue: 2,
                type: 'bottom',
                id: 'trousers'
            },
            {
                title: 'shorts & skirts',
                defaultValue: 2,
                type: 'bottom',
                id: 'skirts'
            },
            {
                title: 'T-shirts & blouses',
                defaultValue: 2,
                type: 'top',
                id: 'blouses'
            },
            {
                title: 'sweaters & hoodies',
                defaultValue: 1,
                type: 'top',
                id: 'trousers'
            },
            {
                title: 'dresses & overalls',
                defaultValue: 1,
                type: 'fullBody',
                id: 'dresses'
            },
        ],
        recyclingCenters: [
            {
                title: 'H&M',
                description: 'H&M has offered garment recycling services since 2013, and all its stores collect clothing for recycling – just hand over the bag at the cash desk. You can donate any clothing or textiles, not just your old outfits from H&M, and it doesn’t matter what condition they’re in. Good quality clothing will be donated to charity, and worn textiles are recycled into new products and materials for the manufacturing industry. For every bag of textiles you donate, you’ll be given a £5 voucher to spend in store.',
                url: 'https://www2.hm.com/en_gb/index.html'
            },
            {
                title: 'Marks and Spencer',
                description: 'M&S has partnered with Oxfam to encourage more people to recycle their used clothing. You can either drop off your used M&S clothing at the bins in store, or take it to your nearest branch of Oxfam. Every time you donate your unwanted M&S clothing or soft furnishings to Oxfam, you’ll receive a £5 voucher (with £35 minimum spend) for Marks & Spencer.',
                url: 'https://www.marksandspencer.com/'
            },
            {
                title: '& Other Stories',
                description: '& Other Stories invites their customers to recycle their unwanted clothes, textiles, and beauty product packaging in store. As a thank you, you’ll get a 10% “recycling treat” voucher, which is valid for three months. Beauty packaging is sorted in store and recycled. Textiles are sorted and recycled according to their condition – items in good condition are donated as second-hand clothing or upcycled for resale; items that can no longer be re-worn are repurposed as cleaning cloths; and very worn textiles are recycled into fibres and material for use in industry.',
                url: 'https://www.stories.com/en_eur/index.html'
            },
            {
                title: 'Zara',
                description: 'Zara piloted its clothing recycling scheme in 2016, and now has clothing bins installed in many of its stores. You can find your closest participating store here. All collected clothing is donated to charities including the Red Cross and Salvation Army, or recycled into other textiles, new fibres, and materials. You can donate any kind of clothing, household textiles, footwear, accessories, and jewellery.',
                url: 'https://www.zara.com/'
            },
            {
                title: 'TRAID',
                description: 'There are, of course, many charity shops across London you can donate your clothing at. However, in addition to its 11 stores across the city, TRAID also offers a home collection service, as long as you have a bin bag full. You can book collection online or by email. Clothing must be in good enough condition for resale, and they’ll also accept shoes, accessories, and home textiles.',
                url: 'https://www.traid.org.uk/clothes-donations/'
            }
        ]
    },
    placeHolders: {
        blouses: 0,
        skirts: 0,
        trousers: 0,
        sweaters: 0,
        dresses: 0
    }
}