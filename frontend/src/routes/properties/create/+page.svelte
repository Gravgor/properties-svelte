<style>
.create-property-section {
  background-color: #0A192F;
  color: #00d1b2;
  padding: 20px;
  border-radius: 10px;
}

.create-property-section h2 {
  margin-top: 0;
}

.create-property-section form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.create-property-section label {
  display: block;
  margin-bottom: 5px;
}

.create-property-section input[type="text"],
.create-property-section textarea,
.create-property-section input[type="number"] {
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
}

.create-property-section input[type="submit"] {
  grid-column: 1 / 3;
  background-color: #00d1b2;
  color: #0A192F;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.create-property-section input[type="submit"]:hover {
  background-color: #00796b;
}
</style>


<div class="create-property-section">
    <h2>Create a Property</h2>
    <form>
      <label for="property-name">Property Name:</label>
      <input type="text" id="property-name" name="property-name" required>
  
      <label for="property-address">Property Address:</label>
      <input type="text" id="property-address" name="property-address" required>
  
      <label for="property-description">Property Description:</label>
      <textarea id="property-description" name="property-description" required></textarea>
  
      <label for="property-price">Property Price:</label>
      <input type="number" id="property-price" name="property-price" required>
  
      <input type="submit" value="Submit">
    </form>
  </div>
  