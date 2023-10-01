<template>
    <div v-if="job">
        <h1>Job Detail Page</h1>
        <h2>{{ job.title }}</h2>
        <p>{{ job.detail }}</p>
    </div>
    <div v-else>
        <p>Loading job details ...</p>
    </div>
</template>

<script>
export default {
    name: 'JobDetailView',
    props: ['id'],
    data: function () {
        return {
            job: null,
        }
    },
    mounted() {
        fetch(`http://localhost:3000/jobs/${this.id}`)
            .then((res) => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message));
    }
}
</script>

<style></style>