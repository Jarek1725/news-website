<template>
    <section class="feeds">
        <base-card :padding="false">
            <template v-slot:header>
                travel
            </template>
            
            <feeds-layout :items="travelPosts"/>
        </base-card>

        <base-card class="mt-6" :padding="false">
            <template v-slot:header>
                technology
            </template>
            <feeds-layout :items="technologyPosts"/>
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
            travelPosts: [
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_1280.jpg', title: 'Example hero contain feeed is now avaible!', date: '11 Janurary, 2021', author: 'admin', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere turpis sollicitudin augue consequat, tempor volutpat quam suscipit. Donec iaculis enim tempor mauris pharetra maximus. Maecenas aliquet diam ac risus porttitor, at varius lacus ullamcorper. Ut malesuada nec sapien eu rutrum. Curabitur pretium viverra sapien sed interdum. Nulla facilisi. Vivamus sed libero porta, ultrices tellus et, malesuada tellus. Praesent eu nisl dictum, scelerisque enim non, eleifend neque. Praesent ornare, arcu nec scelerisque semper, quam risus scelerisque mauris, nec finibus sapien sapien et urna. Curabitur luctus dignissim metus at maximus. Sed sed aliquam enim."},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550_1280.jpg', title: 'This is example hero contain feed!', date: '10 Janurary, 2021', author: 'moderator'},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/10/03/08/53/lighthouse-5622924_1280.jpg', title: 'Lorem ipsum doler sit amet feeed!', date: '10 Janurary, 2021', author: 'admin'},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550_1280.jpg', title: 'This is example hero contain feed!', date: '10 Janurary, 2021', author: 'moderator'},
            ],
            technologyPosts: [
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_1280.jpg', title: 'Example hero contain feeed is now avaible!', date: '11 Janurary, 2021', author: 'admin', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere turpis sollicitudin augue consequat, tempor volutpat quam suscipit. Donec iaculis enim tempor mauris pharetra maximus. Maecenas aliquet diam ac risus porttitor, at varius lacus ullamcorper. Ut malesuada nec sapien eu rutrum. Curabitur pretium viverra sapien sed interdum. Nulla facilisi. Vivamus sed libero porta, ultrices tellus et, malesuada tellus. Praesent eu nisl dictum, scelerisque enim non, eleifend neque. Praesent ornare, arcu nec scelerisque semper, quam risus scelerisque mauris, nec finibus sapien sapien et urna. Curabitur luctus dignissim metus at maximus. Sed sed aliquam enim."},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550_1280.jpg', title: 'This is example hero contain feed!', date: '10 Janurary, 2021', author: 'moderator'},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/10/03/08/53/lighthouse-5622924_1280.jpg', title: 'Lorem ipsum doler sit amet herroo', date: '10 Janurary, 2021', author: 'admin'},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550_1280.jpg', title: 'This is example hero contain feed!', date: '10 Janurary, 2021', author: 'moderator'},
            ],
        }
    }
}
</script>

<style>

</style>