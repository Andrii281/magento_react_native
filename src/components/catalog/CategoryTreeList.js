import React from 'react';
import { FlatList } from 'react-native';
import CategoryTreeListItem from './CategoryTreeListItem';

class CategoryTreeList extends React.Component {
  renderItem = category => {
    return <CategoryTreeListItem
      category={category.item}
      expanded={false}
      navigate={this.props.navigate}
    />
  }

  render() {
    const { categories } = this.props;
    return (
      <FlatList
        style={{ flex: 1 }}
        data={categories.children_data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => String(item.id)}
      />
    );
  }
}

export default CategoryTreeList;