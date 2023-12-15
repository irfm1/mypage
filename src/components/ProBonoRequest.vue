<template>
    <div class="card-container mt-5">
        <div class="card">
            <div class="card-header">
                <h3>Pro Bono Website Request</h3>
            </div>
            <div class="card-body row">
                <div class="pro-bono-request">
                
                    <!-- <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <label for="idea">Idea</label>
                            <textarea id="idea" v-model="request.idea" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="scope">Scope</label>
                            <textarea id="scope" v-model="request.scope" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="reason">Why do you need this service?</label>
                            <textarea id="reason" v-model="request.reason" required></textarea>
                        </div>
                        <button type="submit">Submit Request</button>
                    </form> -->

                    Under dev...
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ProBonoRequest',
    data() {
        return {
            request: {
                idea: '',
                scope: '',
                reason: ''
            }
        }
    },
    methods: {
        submitForm() {
            // Handle form submission here
            console.log(this.request);
        }
    }
}
</script>
  
<style scoped>
/* Add your styles here */

.pro-bono-request {
    margin: 0 auto;
    max-width: 600px;
}

.pro-bono-request h2 {
    margin-bottom: 20px;
}

.pro-bono-request form {
    display: flex;
    flex-direction: column;
}

.pro-bono-request form .form-group {
    margin-bottom: 20px;
}

.pro-bono-request form label {
    display: block;
    margin-bottom: 5px;
}

.pro-bono-request form textarea {
    height: 100px;
    resize: none;
}

.pro-bono-request form button {
    width: 200px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
}

.pro-bono-request form button:hover {
    background-color: #42b983;
    color: #fff;
}

.pro-bono-request form button:active {
    background-color: #3b8070;
    color: #fff;
}

.pro-bono-request form button:focus {
    outline: none;
}

.pro-bono-request form button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.pro-bono-request form button:disabled:hover {
    background-color: #ccc;
    color: #fff;
}

.pro-bono-request form button:disabled:active {
    background-color: #ccc;
    color: #fff;
}

.pro-bono-request form button:disabled:focus {
    outline: none;
}
</style>