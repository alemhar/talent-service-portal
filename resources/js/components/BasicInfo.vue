<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Basic Info</div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label for="first-name" class="col-sm-2 col-form-label">First Name</label>
                            <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="first-name">
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">First Name</span>
                            </div>
                            <input type="text" class="form-control" aria-label="First Name" aria-describedby="inputGroup-sizing-default">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Middle Name</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Middle Name" aria-describedby="inputGroup-sizing-default">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Last Name</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Last Name" aria-describedby="inputGroup-sizing-default">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
