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
                                <input type="text" class="form-control-plaintext" id="first-name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="middle-name" class="col-sm-2 col-form-label">Middle Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control-plaintext" id="middle-name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="last-name" class="col-sm-2 col-form-label">Last Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control-plaintext" id="last-name">
                            </div>
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
