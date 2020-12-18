class RemoveIndexFromRewards < ActiveRecord::Migration[5.2]
  def change
    remove_index :rewards, name: "index_rewards_on_project_id"
  end
end
