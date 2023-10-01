<template>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
        <div v-for="job in jobs" :key="job.id" class="job">
            <router-link :to="{ name: 'job-detail', params: { id: job.id } }" class="link">{{ job.title }}</router-link>
        </div>
        <router-view />
    </div>
    <div v-else>
        <p>Loading jobs ...</p>
    </div>
</template>

<script>
export default {
    name: 'JobsView',
    data: function () {
        return {
            jobs: [],
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
            .then((res) => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err.message));
    }
}
</script>

<style scoped>
.job {
    background-color: #5C5C5C;
    color: white;
    width: 800px;
    height: 80px;
    border-radius: 20px;
    margin: 20px auto;
}

.job:hover {
    background-color: #282828;
}

.job .link {
    color: white;
    text-decoration: none;
    font-size: 50px;
}
</style>