<template>
    <section class="feeds">
        <base-card
            :padding="false"
            v-for="(object, i) in layout"
            :key="i"
            class="mb-5"
        >
            <template v-slot:header>
                {{object.genre}}
            </template>

            <feeds-layout :layout="object.layout" :items="object.items"/>
        </base-card>
    </section>
</template>

<script>
import FeedsLayout from '@/components/feed/Layout';

export default {
    name: 'CoreFeeds',
    components: {
        FeedsLayout,
    },
    data() {
        return {
            layout: [
                {
                    genre: "travel",
                    layout: [[0],[1,1,1,1]],
                    items: [],
                },
                {
                    genre: "technology",
                    layout: [[0,1,1],[0,1,1]],
                    items: [],
                },
                {
                    genre: "politics",
                    layout: [[1,1,1,1],[0]],
                    items: [],
                },
                {
                    genre: "latest posts",
                    layout: [[1,1,1,1],[1,1,1,1]],
                    items: [],
                },
            ],
        }
    },
    methods: {
        loadItems() {
            let arr = [];
            this.layout.forEach(element => {
                for(var i=0; i<element.layout.length; i++) {
                    for(var j=0; j<element.layout[i].length; j++) {
                        if(element.layout[i][j] === 0)
                            arr.push({to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_1280.jpg', title: 'Example hero contain feeed is now avaible!', date: '11 Janurary, 2021', author: 'admin', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere turpis sollicitudin augue consequat, tempor volutpat quam suscipit. Donec iaculis enim tempor mauris pharetra maximus. Maecenas aliquet diam ac risus porttitor, at varius lacus ullamcorper. Ut malesuada nec sapien eu rutrum. Curabitur pretium viverra sapien sed interdum. Nulla facilisi. Vivamus sed libero porta, ultrices tellus et, malesuada tellus. Praesent eu nisl dictum, scelerisque enim non, eleifend neque. Praesent ornare, arcu nec scelerisque semper, quam risus scelerisque mauris, nec finibus sapien sapien et urna. Curabitur luctus dignissim metus at maximus. Sed sed aliquam enim."});
                        else if(element.layout[i][j] === 1)
                            arr.push({to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_1280.jpg', title: 'Example hero contain feeed is now avaible!', date: '11 Janurary, 2021', author: 'admin'});
                    }
                    element.items.push(arr);
                }
                console.log(element.items); 
            });
        }
    },
    created() {
        this.loadItems();
    }
}
</script>

<style>

</style>

