import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import useUpdateEffect from "../components/useEffectupdate";
import categories from "../data/datagg";

const AddProductScreen = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedSubCategoryIndex, setSelectedSubCategoryIndex] = useState(0);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  console.log(selectedCategoryIndex, selectedSubCategoryIndex);
  useEffect(() => {
    setSelectedSubCategoryIndex(0);
  }, [selectedCategoryIndex]);
  useEffect(() => {
    setSelectedGroupIndex(0);
  }, [selectedCategoryIndex, selectedSubCategoryIndex]);

  const selectedCategory = categories[selectedCategoryIndex]; // men
  const selectedSubCategory =
    selectedCategory.subCategories[selectedSubCategoryIndex]; //pants || ay7aga
  const selectedGroup = selectedSubCategory.groups[selectedGroupIndex]; // jeans
  const subCategoriesOptions = selectedCategory.subCategories.map(
    (subCategory, index) => {
      return {
        label: subCategory.name_en,
        value: index,
      };
    }
  );
  const categoryOptions = categories.map((category, index) => {
    return {
      label: category.name_en,
      value: index,
    };
  });
  console.log(selectedSubCategory);
  const groupsOptions = selectedSubCategory.groups.map((group, index) => {
    return {
      label: group.name_en,
      value: index,
    };
  });
  const { details } = selectedGroup;
  const [selectedDetails, setSelectedDetails] = useState(
    details.map((detail) => {
      return { ...detail, value: "" };
    })
  );
  console.log(selectedDetails);
  const detailsOptions = details.map((detail, index) => {
    return {
      label: detail.name_en,
      value: index,
    };
  });
  useEffect(() => {
    setSelectedDetails(
      details.map((detail) => {
        return { ...detail, value: "" };
      })
    );
  }, [selectedCategoryIndex, selectedSubCategoryIndex, selectedGroupIndex]);
  return (
    <>
      <RadioForm formHorizontal={true} animation={true}>
        {/* To create radio buttons, loop through your array of options */}
        {categoryOptions.map((category, index) => (
          <RadioButton labelHorizontal={true} key={index}>
            {/*  You can set RadioButtonLabel before RadioButtonInput */}
            <RadioButtonInput
              obj={category}
              index={index}
              isSelected={selectedCategoryIndex === index}
              onPress={(index) => {
                setSelectedCategoryIndex(index);
              }}
              borderWidth={1}
              buttonInnerColor={"#50C900"}
              buttonSize={40}
              buttonOuterSize={80}
              buttonStyle={{}}
              buttonWrapStyle={{ marginLeft: 10 }}
            />
            <RadioButtonLabel
              obj={category}
              index={index}
              labelHorizontal={true}
              onPress={(index) => {
                setSelectedCategoryIndex(index);
              }}
              labelStyle={{ fontSize: 20, color: "#2ecc71" }}
              labelWrapStyle={{}}
            />
          </RadioButton>
        ))}
      </RadioForm>
      <RadioForm formHorizontal={true} animation={true}>
        {/* To create radio buttons, loop through your array of options */}
        {subCategoriesOptions.map((subCategory, index) => (
          <RadioButton labelHorizontal={true} key={index}>
            {/*  You can set RadioButtonLabel before RadioButtonInput */}
            <RadioButtonInput
              obj={subCategory}
              index={index}
              isSelected={selectedSubCategoryIndex === index}
              onPress={(index) => {
                setSelectedSubCategoryIndex(index);
              }}
              borderWidth={1}
              buttonInnerColor={"#e74c3c"}
              buttonSize={40}
              buttonOuterSize={80}
              buttonStyle={{}}
              buttonWrapStyle={{ marginLeft: 10 }}
            />
            <RadioButtonLabel
              obj={subCategory}
              index={index}
              labelHorizontal={true}
              onPress={(index) => {
                setSelectedSubCategoryIndex(index);
              }}
              labelStyle={{ fontSize: 20, color: "#2ecc71" }}
              labelWrapStyle={{}}
            />
          </RadioButton>
        ))}
      </RadioForm>
      <RadioForm formHorizontal={true} animation={true}>
        {/* To create radio buttons, loop through your array of options */}
        {groupsOptions.map((group, index) => (
          <RadioButton labelHorizontal={true} key={index}>
            {/*  You can set RadioButtonLabel before RadioButtonInput */}
            <RadioButtonInput
              obj={group}
              index={index}
              isSelected={selectedGroupIndex === index}
              onPress={(index) => {
                setSelectedGroupIndex(index);
              }}
              borderWidth={1}
              buttonInnerColor={"#e74c3c"}
              buttonSize={40}
              buttonOuterSize={80}
              buttonStyle={{}}
              buttonWrapStyle={{ marginLeft: 10 }}
            />
            <RadioButtonLabel
              obj={group}
              index={index}
              labelHorizontal={true}
              onPress={(index) => {
                setSelectedGroupIndex(index);
              }}
              labelStyle={{ fontSize: 20, color: "#2ecc71" }}
              labelWrapStyle={{}}
            />
          </RadioButton>
        ))}
      </RadioForm>
      {selectedDetails.map((detail, detailIndex) => (
        <RadioForm formHorizontal={true} animation={true}>
          {/* To create radio buttons, loop through your array of options */}
          {detail.options
            .map((option, index) => {
              return {
                label: option.name_en,
                value: index,
              };
            })
            .map((option, optionIndex) => (
              <RadioButton labelHorizontal={true} key={optionIndex}>
                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                <RadioButtonInput
                  obj={option}
                  index={optionIndex}
                  isSelected={
                    selectedDetails[detailIndex].value === option.label
                  }
                  onPress={() => {
                    const selectedDetailsCopy = selectedDetails.slice();
                    selectedDetailsCopy[detailIndex].value = option.label;
                    setSelectedDetails(selectedDetailsCopy);
                    console.log(selectedDetailsCopy[detailIndex].value);
                  }}
                  borderWidth={1}
                  buttonInnerColor={"#e74c3c"}
                  buttonSize={40}
                  buttonOuterSize={80}
                  buttonStyle={{}}
                  buttonWrapStyle={{ marginLeft: 10 }}
                />
                <RadioButtonLabel
                  obj={option}
                  index={optionIndex}
                  labelHorizontal={true}
                  onPress={() => {
                    const selectedDetailsCopy = selectedDetails.slice();
                    selectedDetailsCopy[detailIndex].value = option.label;
                    setSelectedDetails(selectedDetailsCopy);
                    console.log(selectedDetailsCopy[detailIndex].value);
                  }}
                  labelStyle={{ fontSize: 20, color: "#2ecc71" }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            ))}
        </RadioForm>
      ))}
    </>
  );
};

const styles = StyleSheet.create({});

export default AddProductScreen;
